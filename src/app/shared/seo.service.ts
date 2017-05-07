import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {
    constructor(
        private titleService: Title, 
        private metaService: Meta
    ) {}

    public setTitle(strTitle: string) {
        this.titleService.setTitle(strTitle);
    } // setTitle()

    public setMetaDescription(strMetaDescription: string) {
        this.metaService.updateTag({
            content: strMetaDescription
        }, "name='description'" );
    } // setMetaDescription()
}