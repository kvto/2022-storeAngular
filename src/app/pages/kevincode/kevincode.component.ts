import {Component, OnInit} from '@angular/core';

@Component({ //Decorador marca el comportamiento de una clase 
    selector: 'app-kevincode',
    templateUrl: './kevincode.component.html',
    styleUrls: ['./kevincode.component.scss']
})

export class KevincodeComponent implements OnInit{

    constructor(){ }
    ngOnInit(): void { }
}