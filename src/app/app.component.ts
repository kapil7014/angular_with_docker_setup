import { Component } from '@angular/core';
import { datadogLogs } from '@datadog/browser-logs'
import { datadogRum } from '@datadog/browser-rum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private jsonReport: Array<any> = [];
  title = 'angular-docker-demo';

  constructor() {
    datadogRum.init({
      applicationId: '3e122127-35ad-4487-8154-9858c3ab262c',
      clientToken: 'pub57f09cd210f4adf73c6cbb477640e507',
      site: 'datadoghq.com',
      service: 'angular-demo',
      env: "develop",

      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0',
      sampleRate: 100,
      premiumSampleRate: 100,
      trackInteractions: true,
      defaultPrivacyLevel: 'mask-user-input'
    });

    datadogRum.startSessionReplayRecording();

    datadogRum.addError("10940883 - Video Logger",
      {
        RoomId: "10940883",
        DateTime: "2022-05-31T12:16:57.461Z",
        LogLevel: "logLevel",
        Component: "[TwilioConnection #2: wss://global.vss.twilio.com/signaling]",
        Message: "Unexpected state 'closed' for handling a 'heartbeat' message from the TCMP server",
        Data: "",
      });

    var error = {
      RoomId: "10940883",
      DateTime: "2022-05-31T12:16:57.461Z",
      LogLevel: "logLevel",
      Component: "[TwilioConnection #2: wss://global.vss.twilio.com/signaling]",
      Message: "Unexpected state 'closed' for handling a 'heartbeat' message from the TCMP server",
      Data: "",
    };

    this.jsonReport.push('Preflight Error: ' + JSON.stringify(error));

    this.functinname();
  }

  functinname (){
    console.log("Hello");
  }
}
