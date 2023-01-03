import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public post;
  constructor(private route: ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getPost(this.route.snapshot.queryParamMap.get('id')).subscribe(p => {
      console.log(p);
      this.post = p
    })
  }

}