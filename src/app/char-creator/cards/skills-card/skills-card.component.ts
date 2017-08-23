import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {

  skills = [
    
  ];

  skillSectors = [
    {name: "Handeln", skills: [
      {name: "Schleichen"},
      {name: "Diebstahl"},
      {name: "Schlösserknacken"}
    ]},
    {name: "Wissen", skills: [
      {name: "Stadtwissen"},
      {name: "Magiekunde"},
      {name: "Heilkunde"}
    ]},
    {name: "Interagieren", skills: [
      {name: "Täuschen"},
      {name: "Ablenken"},
      {name: "Sinnesschärfe"}
    ]}
  ]

  constructor() { }

  ngOnInit() {
  }

}
