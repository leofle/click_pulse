/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ErrorCardComponent } from './error-card.component';

describe('Component: ErrorCard', () => {
  it('should create an instance', () => {
    let component = new ErrorCardComponent();
    expect(component).toBeTruthy();
  });
});
