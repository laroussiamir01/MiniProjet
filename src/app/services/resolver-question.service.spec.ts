import { TestBed } from '@angular/core/testing';

import { ResolverQuestionService } from './resolver-question.service';

describe('ResolverQuestionService', () => {
  let service: ResolverQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
