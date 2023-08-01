import{ React,useEffect,useState }from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';

export default function Mouse() {
  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState(true)
  const theme = useTheme();
  useEffect(() => {
    // 在 React 中使用 addEventListener 监听事件
    document.addEventListener('scroll', handleScroll, true);
    // 组件卸载时移除事件监听
    return () => document.removeEventListener('scroll', handleScroll)
  }, [visibleBackTopBtn])

  // 滚动事件监听函数
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop  || 0
    // scrollTop 为距离滚动条顶部高度
    // scrollHeight 为整个文档高度
    const scrollHeight =  document.body.scrollHeight || document.documentElement.scrollHeight  || 0
    // 我们设定当滚动的距离大于 200 时，显示 【返回顶部】按钮
    if (scrollTop >= (scrollHeight-1300)) {
      setVisibleBackTopBtn(false)
    } else {
      setVisibleBackTopBtn(true)
    }
  }
 

    
  return (
    visibleBackTopBtn && <div  className='scrollIndicator' style={{ '--color': theme.palette.foreground.default }}></div>
  )
}
