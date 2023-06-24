import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminseviceService {

  constructor(private http:HttpClient) { }
  public submit(r:any)
  {
    return this.http.post("http://localhost:3010/pdata",r,{responseType: 'text'})
  }
  public submitcat(cata:any)
  {
    return this.http.post("http://localhost:3010/cdata",cata)
  }
  public getdata()
  {
    return this.http.get("http://localhost:3010/getdata")
  }
  public delete(k:any)
  {
    return this.http.post("http://localhost:3010/delete",k)
  }
  public getpdata()
  {
    return this.http.get("http://localhost:3010/getpdata")
  }
  public delete1(k:any)
  {
    return this.http.post("http://localhost:3010/delete1",k)
  }
  public submit2(k:any)
  {
    return this.http.post("http://localhost:3010/submit2",k)
  }
  public click1()
  {
    return this.http.post("http://localhost:3010/power","knc")
  }

}
