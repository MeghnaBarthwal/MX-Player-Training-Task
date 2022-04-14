package meghna.listview;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    ListView listView;
    String name[]={"java","Android","Dart","Flutter"};
    ArrayAdapter<String> adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listView=findViewById(R.id.list);
        adapter=new ArrayAdapter<String>(MainActivity.this, android.R.layout.simple_list_item_1,name);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int pos, long l) {
                switch (pos){
                    case 0:
                        Intent i = new Intent(MainActivity.this, activity_second.class);
                        startActivity(i);
                        Toast.makeText(MainActivity.this,"click java",Toast.LENGTH_LONG).show();
                        break;
                    case 1:
                        Toast.makeText(MainActivity.this,"click Android",Toast.LENGTH_LONG).show();
                        break;

                    case 2:
                        Toast.makeText(MainActivity.this,"click dart",Toast.LENGTH_LONG).show();
                        break;


                    default:
                        throw new IllegalStateException("Unexpected value: " + pos);
                }
            }
        });
    }

}