import { UniqueIdService } from './unique-id.service';
describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithOrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithOrefix('app');
    expect(id).toContain('app-');
  });

})
