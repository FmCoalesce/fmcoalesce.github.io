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

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop  || 0
    if (scrollTop >= 300) {
      setVisibleBackTopBtn(false)
    } else {
      setVisibleBackTopBtn(true)
    }
  }
 

    
  return (
    visibleBackTopBtn && <div  className='scrollIndicator' style={{ '--color': theme.palette.foreground.default }}></div>
  )
}
