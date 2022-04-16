import { render } from '@testing-library/react'

import SocialMediaButtonGroup from '.';

describe("SocialMediaButtonGroup", () => {
    test("renders SocialMediaButtonGroup and matches snapshot", () => {
        render(
            <SocialMediaButtonGroup />
        );

        expect(screen).toMatchSnapshot();

    });
});
