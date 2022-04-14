package meghna.sharedpreferences;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText e1, e2;
    Button b1,b2,b3;
    SharedPreferences pref;
    String file = "meghna";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1=findViewById(R.id.edit1);
        e2=findViewById(R.id.edit2);
        b1=findViewById(R.id.save);
        b2=findViewById(R.id.view);
        b3=findViewById(R.id.delete);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                pref = getSharedPreferences(file,MODE_PRIVATE);
                SharedPreferences.Editor editor = pref.edit();
                editor.putInt("ID",Integer.parseInt(e1.getText().toString()));
                editor.putString("Name", e2.getText().toString());
                editor.commit();
                Toast.makeText(MainActivity.this, "Saved", Toast.LENGTH_SHORT).show();
            }
        });

        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
            String s11,s12;
                pref = getSharedPreferences(file,MODE_PRIVATE);
                s11=String.valueOf(pref.getInt("ID",100));
                s12=pref.getString("Name","aditi");
                e1.setText(s11);
                e2.setText(s12);
                Toast.makeText(MainActivity.this, "fetch", Toast.LENGTH_SHORT).show();
            }
        });

        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                pref = getSharedPreferences(file,MODE_PRIVATE);
                SharedPreferences.Editor editor = pref.edit();
                editor.clear();
                editor.commit();
                e1.setText("");
                e2.setText("");
                Toast.makeText(MainActivity.this, "delete", Toast.LENGTH_SHORT).show();
            }
        });
    }
}