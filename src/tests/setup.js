import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'canvas-prebuilt';

Enzyme.configure({ adapter: new Adapter() });
