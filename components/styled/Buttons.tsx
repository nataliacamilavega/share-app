import {Text, TouchableOpacity} from 'react-native'

type ButtonsT = {
  text: String
  type?: String
}

const Buttons = ({text, type = 'text'}: ButtonsT) => {
  return (
    <TouchableOpacity
      className={` ${
        type === 'filled'
          ? '  border-secondary-main bg-secondary-main '
          : type === 'outlined'
            ? '  border-2 border-transparent bg-transparent  '
            : '  border-2-transparent '
      }`}
    >
      <Text
        className={` text-white  border-2 ${
          type === 'filled'
            ? '  border-secondary-main bg-secondary-main '
            : type === 'outlined'
              ? '  border-white bg-transparent  '
              : '  border-transparent '
        }`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Buttons
