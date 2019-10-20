import { monoidLaws } from "../../../source/fp/types/Monoid";
import { stringMonoid } from "../../../source/fp/instances/monoids";

describe('string monoid', () => {
    it('should respect left identity', () => {
        expect(monoidLaws.leftIdentity(stringMonoid)('test')).toBe(true)
    });

    it('should respect right identity', () => {
        expect(monoidLaws.rightIdentity(stringMonoid)('test')).toBe(true)
    });

    it('should respect associativity', () => {
        expect(monoidLaws.associativity(stringMonoid)('test')('associativity')('law')).toBe(true)
      });
});