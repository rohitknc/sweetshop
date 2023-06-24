import { Component ,OnInit} from '@angular/core';
import { AdminseviceService } from '../../adminsevice.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  products:any;
  k1:any={

  }
  constructor(private as:AdminseviceService){}
knc()
{
  this.as.getpdata().subscribe((data)=>
  {
    this.products=data;
  },
  (err)=>
  {
    console.log(err);
  });
}
ngOnInit(): void {
  this.knc();
}
delete1(k:any){
  this.k1.k=k;
this.as.delete1(this.k1).subscribe((data)=>
{
  console.log(data);
},
(err)=>
{
})
this.knc();
}
}
