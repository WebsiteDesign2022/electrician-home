import { render } from '@testing-library/react'

import FeatureBox from '.';

describe("FeatureBox", () => {
    test("renders FeatureBox", () => {
        render(
            <FeatureBox
                title="FeatureBox-title"
                description="FeatureBox-description"
            />
        );

        expect(screen).toMatchSnapshot();

    });
});
