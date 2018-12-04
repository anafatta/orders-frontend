import { AccountsModule } from './accounts.module';

describe('AccountsModule', () => {
  let customersModule: AccountsModule;

  beforeEach(() => {
    customersModule = new AccountsModule();
  });

  it('should create an instance', () => {
    expect(customersModule).toBeTruthy();
  });
});
