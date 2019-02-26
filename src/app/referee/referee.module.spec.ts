import { RefereeModule } from './referee.module';

describe('PlayerModule', () => {
  let refereeModule: RefereeModule;

  beforeEach(() => {
    refereeModule = new RefereeModule();
  });

  it('should create an instance', () => {
    expect(refereeModule).toBeTruthy();
  });
});
