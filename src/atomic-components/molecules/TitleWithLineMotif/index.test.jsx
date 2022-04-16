import TestRenderer from 'react-test-renderer';

import TitleWithLineMotif from '.';

describe("TitleWithLineMotif", () => {
    test("renders TitleWithLineMotif", () => {
        const titleWithLineMotif = TestRenderer.create(
            <TitleWithLineMotif/>
        );

        expect(titleWithLineMotif.toJSON()).toMatchSnapshot();
    });
});
