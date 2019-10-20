import { maybeOrMonoid, stringMonoid } from "../../../source/fp/instances/monoids";
import { monoidLaws } from "../../../source/fp/types/Monoid";
import { just } from "../../../source/fp/types/Maybe";


const underTest = maybeOrMonoid(stringMonoid);

describe('maybe or monoid', () => {
    it('should respect left identity', () => {
        expect(monoidLaws.leftIdentity(underTest)(just('test'))).toBe(true)
    });

    it('should respect right identity', () => {
        expect(monoidLaws.rightIdentity(underTest)(just('test'))).toBe(true)
    });

    it('should respect associativity', () => {
        const a = just('test');
        const b = just('associativity');
        const c = just('law');
        expect(monoidLaws.associativity(underTest)(a)(b)(c)).toEqual(true)
    });
});