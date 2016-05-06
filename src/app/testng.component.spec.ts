import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestngAppComponent } from '../app/testng.component';

beforeEachProviders(() => [TestngAppComponent]);

describe('App: Testng', () => {
  it('should create the app',
      inject([TestngAppComponent], (app: TestngAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'testng works!\'',
      inject([TestngAppComponent], (app: TestngAppComponent) => {
    expect(app.title).toEqual('testng works!');
  }));
});
