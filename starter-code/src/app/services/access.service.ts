import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
  log: Array<Object> = []



  constructor() { }
  
  getAccessLog(){
    return this.log;
  
  }
  
  addAccessItem(person, message) {
    var newLog= {
      person: person,
      message: message,
      createdAt: new Date()
    }
    this.log.push(newLog)
   
  }

} // this is the last bracket




