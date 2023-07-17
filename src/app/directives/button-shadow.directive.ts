import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[buttonShadow]'
})

export class ButtonShadowDirective{
    
    
    @HostBinding('style.boxShadow') boxShadow = 'none';

    // Injecting the element to apply shadow properties
    // Instead of accessing the native element directly we use renderer
    constructor(private elementRef: ElementRef, private renderer: Renderer2){ };


    @HostListener('mouseenter') mouseover(eventData: Event){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', '0 0 10px #000');
        this.boxShadow = '0 0 10px #000';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
        this.boxShadow = 'none';
    }
}