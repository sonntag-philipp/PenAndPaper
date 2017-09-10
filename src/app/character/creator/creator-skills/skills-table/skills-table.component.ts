import { Observable } from 'rxjs/Rx';
import { CreatorService } from './../../../services/creator.service';
import { DataSource } from '@angular/cdk/collections';
import { SimpleInputDialog } from './../../../../shared/dialogs/simple-input-dialog.component';
import { MdDialog } from '@angular/material';
import { SkillModel } from './../../../../shared/models/skill.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.css']
})
export class SkillsTableComponent implements OnInit {
  
  public displayedColumns = ['name', 'chance'];

  public dataSource: SkillDataSource;

  constructor(public dialog: MdDialog, public creatorService: CreatorService) { 
    this.dataSource = new SkillDataSource(creatorService);
  }

  ngOnInit() {
  }

  private onSelectItem(item: SkillModel): void {
    this.dialog.open(SimpleInputDialog, {
      data: {inputs: [{name: "Chance", value: 0, type: "number"}]}
    }).afterClosed()
    .subscribe(result => {
      if(result === undefined) return;
      this.creatorService.changeSkillChance(item, result.inputs[0].value);
    });
  }
}


class SkillDataSource extends DataSource<SkillModel>{
  
  constructor(private creatorService: CreatorService){
    super();
  }

  public connect(): Observable<SkillModel[]> {
    return this.creatorService.skillSubject.asObservable();
  }

  public disconnect() {}
}

