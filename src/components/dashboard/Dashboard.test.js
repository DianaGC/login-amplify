import { render } from "@testing-library/react"
import Dashboard from "./Dashboard"
import axios from 'axios'
jest.mock('axios');

describe("Dashboard test", () => {
    const mockedAxios = axios;
    let payload = []
    const mockedPost = mockedAxios.post.mockReturnValueOnce(payload);
    const renderComponent = () => {
        render(
            <Dashboard></Dashboard>
        )
    }
    it("When Dashboard is called then render list of digimons", async () => {
        renderComponent();
        const data = await postBatch();
        expect(axios.get).toHaveBeenCalled();
        expect(screen.queryAllByRole("Card")).toHaveLength(2)
    })
})

