import { Component, ViewEncapsulation, ContentChild, ElementRef, OnInit, AfterContentInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'code-component',
    templateUrl: './code-component.html',
    styleUrls: ['code-component.scss']
})

export class CodeComponent implements OnInit, AfterContentInit {
    @ContentChild('codeData') data: ElementRef<any>;
    code = `<p>Please wait..<p>`;

    constructor(private _snackBar: MatSnackBar) { }

    ngOnInit() {
        console.log(this.data);
    }

    ngAfterContentInit() {
        this.code = this.fixTag(this.data.nativeElement.innerHTML);
    }

    fixTag(html: any) {
        return html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    }

    copyData(data) {
        console.log(data);
        this._snackBar.open('copied', '', {
            duration: 1000,
        });
    }
}