import Bowman from '../characters/Bowman';
import Character from '../characters/Character';

describe('Тестим персонажей', () => {
    test('Лучник живой', () => {
        const bowman = new Bowman('Лучара');
        bowman.health = 80;
        bowman.levelUp();
        const result = [bowman.name, bowman.health, bowman.level, bowman.attack, bowman.protection];
        const expected = ['Лучара', 100, 2, 30, 30];

        expect(result).toEqual(expected);
    });
    test('Лучник мертвый', () => {
        const bowman = new Bowman('Лучара');
        bowman.health = 0;

        expect(() => {
            bowman.levelUp()
        }).toThrow();
    });
});
