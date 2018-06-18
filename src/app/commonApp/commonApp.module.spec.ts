import { CommonAppModule } from './commonApp.module';

describe('CommonModule', () => {
  let commonModule: CommonAppModule;

  beforeEach(() => {
    commonModule = new CommonAppModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
