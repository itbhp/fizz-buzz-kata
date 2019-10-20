import { monoidLaws } from "../../../source/fp/types/Monoid";
import { maybeOrMonoid, stringMonoid } from "../../../source/fp/instances/monoids";
import { just } from "../../../source/fp/types/Maybe";

describe('maybe or monoid', () => {
    it('should respect left identity', () => {
        expect(monoidLaws.leftIdentity(maybeOrMonoid(stringMonoid))(just('test'))).toBe(true)
    });

    it('should respect right identity', () => {
        expect(monoidLaws.rightIdentity(maybeOrMonoid(stringMonoid))(just('test'))).toBe(true)
    });

    xit('should respect associativity', () => {
        expect(monoidLaws.associativity(
            maybeOrMonoid(stringMonoid))
            (just('test'))
            (just('associativity'))
            (just('law'))
        ).toBe(true)
    });
});