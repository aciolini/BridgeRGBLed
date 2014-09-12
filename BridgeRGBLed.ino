

#include <Bridge.h>

#include <YunServer.h>
#include <YunClient.h>

// Listen on default port 5555, the webserver on the Yún
// will forward there all the HTTP requests for us.

YunServer server;

//defining rgb led connection
int redPin = 11;
int greenPin = 10;
int bluePin = 9;

void setup() {
  


  Bridge.begin();
  
  server.listenOnLocalhost();
  server.begin();
  
}

void loop() {
  // Get clients coming from server
  YunClient client = server.accept();
int r, g, b;

  // There is a new client?
  if (client) {
    // Process request
   String command = client.readStringUntil('/');
   
if (command == "changeRGB") {
  r=client.parseInt();
  analogWrite(redPin,r );
  
  g=client.parseInt();
  analogWrite(greenPin, g);
  
   
   b=client.parseInt();
   analogWrite(bluePin, b); 
  
   }

    // Close connection and free resources.
    client.stop();
  }

  //delay(50); // Poll every 50ms
}


