package meghna.task2;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    EditText e1,e2;
    Button b1;
    String s1,s2;
    TextToSpeech ts;


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1=findViewById(R.id.edit1);
        e2=findViewById(R.id.edit2);
        b1=findViewById(R.id.login);

        ts = new TextToSpeech(getApplicationContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int i) {
                if(i != TextToSpeech.ERROR){
                    ts.setLanguage(Locale.ENGLISH);
                }
            }
        });
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                s1=e1.getText().toString();
                s2=e2.getText().toString();
                
                if(s1.contentEquals("meghna") && s2.contentEquals("123456")){
                    Toast.makeText(MainActivity.this, "Login", Toast.LENGTH_SHORT).show();
                    ts.speak("You are Logged in", TextToSpeech.QUEUE_FLUSH,null);
                }else{
                    Toast.makeText(MainActivity.this, "Not login", Toast.LENGTH_SHORT).show();
                    ts.speak("Email or password is incorrect", TextToSpeech.QUEUE_FLUSH, null);
                }

            }
        });
    }
}
