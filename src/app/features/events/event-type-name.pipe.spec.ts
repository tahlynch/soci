import { EventTypeNamePipe } from './event-type-name.pipe';

describe('EventTypeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new EventTypeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
