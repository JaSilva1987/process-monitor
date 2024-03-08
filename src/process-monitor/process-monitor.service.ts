import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { Observable } from 'rxjs';

@Injectable()
export class ProcessMonitorService {
  monitorProcesses(): Observable<string> {
    return new Observable((observer) => {
      exec('ps aux', (error, stdout) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(stdout);
        }
        observer.complete();
      });
    });
  }
}
