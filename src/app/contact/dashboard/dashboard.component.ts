import { Component, OnInit, TemplateRef} from '@angular/core';
import {ContactSerService} from '../../Shared/service/contact-ser.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cont = [];
  modalRef?: BsModalRef;
  term;
  p: number = 1;
  n:number = 1;
  // id:string = '-Mlki1VVjPZPI3U8BodQ';

  constructor(private conSer:ContactSerService, private modalService: BsModalService) { }

  ngOnInit(): void {
    // this.n++;
    this.fetchdata();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchdata(){
    this.conSer.getData('/contact.json').pipe(map(resData=>{
      // console.log(resData);

      const conArray = [];

      for(const key in resData){
        // console.log(key);

        if(resData.hasOwnProperty(key)){
          conArray.push({id:key, ...resData[key]})
        }

        // conArray.push({id:key, ...resData[key]});
      }
      return conArray;
    })).subscribe((res) => {
      this.cont = res;
      // console.log(this.cont);
      // console.log(res);
    } )
  }

  deletData(val) {
    if (confirm(`${"Are sure want to delete contact ?"}`)) {
      this.conSer.deleteData('/contact', val).subscribe((res) => {
        this.fetchdata();
      })
    }
  }

}
function id(id: any, key: string) {
  throw new Error('Function not implemented.');
}

