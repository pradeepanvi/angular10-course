import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[href]'
})

export class ParallaxScrollingDirective {
    constructor(private _elementRef: ElementRef) { }

    @Input() href: string;

    @HostListener('click') onClick() {
        console.log(this._elementRef.nativeElement);
        console.log(this.href);
        this.parallaxScroll(this._elementRef, this.href);
    }

    private parallaxScroll(elementRef: ElementRef, href) {
        let _html = document.querySelector('html');
        let target = href.slice(1);
        let _el = elementRef;
        _html.animate({
            scrollTop: _el.nativeElement.scrollTop
        }, 800)
        window.location.hash = target;
    }

}