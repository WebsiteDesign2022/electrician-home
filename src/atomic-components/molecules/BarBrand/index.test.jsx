import TestRenderer from 'react-test-renderer';

import BarBrand from '.';

describe("BarBrand", () => {
    test("renders BarBrand", () => {
        const barBrand = TestRenderer.create(
            <BarBrand brandName="author mark" />
        );

        expect(barBrand.toJSON()).toMatchSnapshot();
    });
});
