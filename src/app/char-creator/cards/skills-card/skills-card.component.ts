import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {

  skillTableColumns = ['Name', 'Punkte', '%'];

  skills = [
    
  ];

  skillSectors = [
    {name: "Handeln", skills: [
      {name: "Schleichen"},
      {name: "Diebstahl"},
      {name: "Schlösserknacken"},
      {name: "Attentat"},
      {name: "Spurenlesen"},
      {name: "Fallen Stellen/Entschärfen"},
      {name: "Fischen und Jagen"},
      {name: "Klettern"},
      {name: "Nahkampf"},
      {name: "Schildkampf"},
      {name: "Zauberei"},
      {name: "Drei-Schwerter-Stil ^^"}
    ]},
    {name: "Wissen", skills: [
      {name: "Stadtwissen"},
      {name: "Magiekunde"},
      {name: "Heilkunde"},
      {name: "Giftkunde"},
      {name: "Sprachen und Schriften"},
      {name: "Technisches Wissen"},
      {name: "Mystik"},
      {name: "Tierkunde"},
      {name: "Pflanzenkunde"},
      {name: "Terrainkunde"},
      {name: "Feuer machen"},
      {name: "Menschenkenntnis"},
      {name: "Schmiedekunst"},
      {name: "Holzhandwerk"},
      {name: "Schneiderei"},
      {name: "Alchemie"},
      {name: "Kochkunst"}
    ]},
    {name: "Interagieren", skills: [
      {name: "Täuschen"},
      {name: "Ablenken"},
      {name: "Sinnesschärfe"},
      {name: "Überreden"},
      {name: "Einschüchtern"},
      {name: "Betören"},
      {name: "Lügen"}
    ]}
  ]

  constructor() { }

  ngOnInit() {
  }

}
