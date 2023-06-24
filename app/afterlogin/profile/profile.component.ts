import { Component,OnInit} from '@angular/core';
import { AdminseviceService } from 'src/app/admin/adminsevice.service';
import { Router} from '@angular/router';
import { Transform } from 'stream';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private as:AdminseviceService,
    private r:Router){}
 d:any={};
 n:any="/assets/picon.png";
 method1()
 {
  this.as.click1().subscribe((data:any)=>
  {
    console.log(data.data);
    if(data.submit==true)
    {
       this.d=data.data;
    }
    else{
      alert('user already in exist ');
      this.r.navigate(['/navigate/login']);
    }
  },
  (err)=>
  {
    
  })
 }
  ngOnInit(): void {
   this.method1();
  }
knc()
{
  let ele=document.getElementsByClassName("form")[0];
  console.log(ele);
  ele.setAttribute("class","form1");
}
knc1()
{
  let ele=document.getElementsByClassName("form1")[0];
  console.log(ele);
  ele.setAttribute("class","form");
 
}
plk(j:any)
{
 console.log(j.target.files[0]);
 let file=j.target.files[0];
 let fdata=new FormData();
 fdata.append("image",file);
 
}
}
