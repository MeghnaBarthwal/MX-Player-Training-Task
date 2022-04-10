package meghna.task3;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class music extends AppCompatActivity {
    Button bt1,bt2;
    MediaPlayer mp, mp2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_music);
        bt1 = (Button) findViewById(R.id.button1);
        bt2 = (Button) findViewById(R.id.button2);
        final MediaPlayer mp = MediaPlayer.create(music.this,R.raw.mariosong);
        final MediaPlayer mp2 = MediaPlayer.create(music.this,R.raw.music2);
        bt1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(mp.isPlaying() && mp2 == null){
                    if(mp != null)
                        mp.pause();
                }else{
                    if(mp !=null){
                        mp.start();
                    }
                }

            }
        });

        bt2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(mp2.isPlaying() && mp == null){
                    if(mp2 != null)
                        mp2.pause();
                }else{
                    if(mp2 !=null){
                        mp2.start();
                    }
                }
            }
        });
    }
    @Override
    public void onBackPressed(){
        super.onBackPressed();
        mp.stop();
        mp2.stop();
    }
}