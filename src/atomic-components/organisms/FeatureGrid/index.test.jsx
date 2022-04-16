import TestRenderer from 'react-test-renderer';

import FeatureGrid from '.';

describe("FeatureGrid", () => {
    test("renders FeatureGrid given empty", () => {
        const featureGrid = TestRenderer.create(
            <FeatureGrid
                featureList={[]}
            />
        );
        expect(featureGrid.toJSON()).toMatchSnapshot();
    });
    test("renders FeatureGrid given multiple feature items", () => {
        const featureGrid = TestRenderer.create(
            <FeatureGrid
                featureList={[
                    {
                        title: 'feature-title 1',
                        description: 'feature-description 1'
                    },
                    {
                        title: 'feature-title 2',
                        description: 'feature-description 2'
                    },
                ]}
            />
        );
        expect(featureGrid.toJSON()).toMatchSnapshot();
    });
});
