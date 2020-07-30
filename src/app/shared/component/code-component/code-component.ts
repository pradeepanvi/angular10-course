import { Component, ViewEncapsulation, ContentChild, ElementRef, OnInit, AfterContentInit } from "@angular/core";

@Component({
    selector: 'code-component',
    templateUrl: './code-component.html',
    styleUrls: ['code-component.scss']
})

export class CodeComponent implements OnInit, AfterContentInit {
    @ContentChild('codeData') data: ElementRef<any>;
    code = `<p>Please wait..<p>`;

    ngOnInit() {
        console.log(this.data);
    }

    ngAfterContentInit() {
        this.code = this.data.nativeElement.innerHTML;
    }
}