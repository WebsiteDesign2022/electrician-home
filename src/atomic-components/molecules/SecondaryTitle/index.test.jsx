import { render } from '@testing-library/react'

import SecondaryTitle from '.';

describe("SecondaryTitle", () => {
    test("renders SecondaryTitle and matches snapshot", () => {
        render(
            <SecondaryTitle
                titlePartOne="title part one" 
                titlePartTwo="title part two"
            />
        );

        expect(screen).toMatchSnapshot();

    });
});
