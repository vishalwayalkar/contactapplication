import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactSerService } from 'src/app/Shared/service/contact-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:string;
  con;

  constructor(private actRoute: ActivatedRoute, private contactSer:ContactSerService, private route:Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      param => {
        this.id = (param.get(`id`));
      }
    );
    this.contactSer.getId("/contact" ,this.id).subscribe(
      (res) => {
        this.con = { ...res };
       // alert(this.con);
      //  console.log(this.con);
      }
    )
  }

  putData(val){
    this.contactSer.putId("/contact",val, this.id).subscribe((res) => {
      alert("Contact Updated Successfully...");
      this.route.navigate(['/']);
    })
  }

}
