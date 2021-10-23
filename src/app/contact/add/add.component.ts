import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactSerService } from 'src/app/Shared/service/contact-ser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private contactSer:ContactSerService, private route:Router) { }

  ngOnInit(): void {
  }

  putData(val){
    this.contactSer.putData("/contact.json", val).subscribe((res) => {
      alert("Contact Added Successfully...");
      this.route.navigate(['/']);
    })
  }

}
