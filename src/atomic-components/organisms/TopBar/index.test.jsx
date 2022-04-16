import TestRenderer from 'react-test-renderer';

import TopBar from '.';

describe("TopBar", () => {
    test("renders TopBar", () => {
        const topBar = TestRenderer.create(
            <TopBar/>
        );

        expect(topBar.toJSON()).toMatchSnapshot();
    });
});
