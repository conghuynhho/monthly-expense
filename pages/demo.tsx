// import React, {useState} from 'react'
// import {Box, Button, Collapse, Grid, IconButton, Stack, Typography} from '@mui/material'
// import {useTheme} from '@mui/material/styles'
// import {css} from '@emotion/react'
// import {TransitionGroup, CSSTransition} from 'react-transition-group'
//
// const dummyListCoupon: Array<TicketType> = [
//   {
//     id: 1,
//     title: '新規会員登録クーポン',
//     description: '新規会員限定の割引クーポンです。スキジャン会員登録後、30日間利用できます。どのサービスにもご利用頂けますが、クーポンの使用回数は1回限りです。',
//     endTime: 1668262997932,
//     discountPrice: 5000,
//     isUsed: false
//   },
//   {
//     id: 2,
//     title: '新規会員登録クーポン',
//     description: '新規会員限定の割引クーポンです。スキジャン会員登録後、30日間利用できます。どのサービスにもご利用頂けますが、クーポンの使用回数は1回限りです。',
//     endTime: 1668262997932,
//     discountPrice: 5000,
//     isUsed: false
//   },
//   {
//     id: 3,
//     title: '新規会員登録クーポン',
//     description: '新規会員限定の割引クーポンです。スキジャン会員登録後、30日間利用できます。どのサービスにもご利用頂けますが、クーポンの使用回数は1回限りです。',
//     endTime: 1668262997932,
//     discountPrice: 5000,
//     isUsed: false
//   },
//   {
//     id: 4,
//     title: '新規会員登録クーポン',
//     description: '新規会員限定の割引クーポンです。スキジャン会員登録後、30日間利用できます。どのサービスにもご利用頂けますが、クーポンの使用回数は1回限りです。',
//     endTime: 1668262997932,
//     discountPrice: 5000,
//     isUsed: false
//   }
// ]
//
// interface TicketType {
//   id: number,
//   title: string,
//   description: string,
//   endTime: number,
//   discountPrice: number,
//   isUsed: boolean
// }
//
// const TimeDescription = ({isUsed, endTime}: { endTime: number, isUsed: boolean }) => {
//   const theme = useTheme()
//   let TextDesc = <></>
//   const date = `date ${endTime}`
//   if (isUsed) {
//     TextDesc = <span css={css`
//       color: #ffffff;
//       font-size: 12px;
//       border-radius: 5px;
//       padding: 0 4px;
//       background-color: #626262`}>
//       Used
//     </span>
//   } else {
//     const now = Date.now()
//     const days = Math.floor(+new Date() / 1000) + 3 * 24 * 60 * 60 // 3 days
//     const minus = endTime - now
//     if (endTime < now) {
//       TextDesc = <span css={css`
//         color: #ffffff;
//         font-size: 12px;
//         border-radius: 5px;
//         padding: 0 4px;
//         background-color: ${theme.palette.primary.main}`}>
//         New
//       </span>
//     } else if (minus > 0 && minus <= days) {
//       TextDesc = <span css={css`
//         color: #ffffff;
//         font-size: 12px;
//         border-radius: 5px;
//         padding: 0 4px;
//         background-color: #DC496C`}>
//         expired soon
//       </span>
//     } else if (endTime >= now) {
//       TextDesc = <span css={css`
//         color: #ffffff;
//         font-size: 12px;
//         border-radius: 5px;
//         padding: 0 4px;
//         background-color: #626262`}>
//         Expired
//       </span>
//     }
//   }
//   return <Stack direction={'row'} marginTop={'8px'}>
//     {TextDesc}
//     <span css={css`
//       color: ${theme.palette.jade.light};
//       font-size: 12px;
//       margin-left: 8px;
//     `}>{date}まで</span>
//   </Stack>
// }
//
//
// const Ticket = ({ticketType, handleRemove}: {
//   ticketType: TicketType,
//   handleRemove: () => void
// }) => {
//   const theme = useTheme()
//   // const [isMounted, setIsMounted] = useState(false)
//   //
//   // useEffect(() => {
//   //   setIsMounted(true)
//   // }, [])
//
//   // opacity: ${isMounted ? '1' : '0'};
//   // scale: ${(isMounted ? '1' : '0.5')};
//
//   const description = `<div style="display: flex; flex-direction: column">
//     <p style="font-size: 14px; color:${theme.palette.jade.dark};font-weight: bold;margin: 0">{t('16')}</p>
//     <p style="font-size: 14px; color:${theme.palette.jade.dark};margin-bottom: 16px; margin-top: 0">${ticketType.description}</p>
//     </div>`
//   return <Box css={css`
//     padding: 16px;
//     border: 1px solid ${theme.palette.smoke.light};
//     border-radius: 10px;
//     transition: all .5s ease-in-out;
//   `}>
//     <Stack direction="row" justifyContent="space-between">
//       <p css={css`
//       display: flex;
//       align-items: flex-end;
//       margin-bottom: 8px;
//       margin-top: 10px`}>
//         <span css={css`
//         font-size: 14px;
//         color: ${theme.palette.primary.main};
//         line-height: 16px;
//       `}>￥</span>
//         <span css={css`
//         font-size: 36px;
//         font-weight: bold;
//         color: ${theme.palette.primary.main}
//       `}>{ticketType.discountPrice}</span>
//       </p>
//       <IconButton
//         css={css`
//             height: 24px;
//             width: 24px;
//             border: 1px solid #E2E2E2;
//             border-radius: 50%;
//           `}
//         onClick={handleRemove}
//       >
//         x
//       </IconButton>
//     </Stack>
//     <Typography
//       className={'ggj-wt'}
//       variant={'body1'}
//       css={css`
//         font-weight: bold;
//         color: #222222DE;
//       `}>{ticketType.title}</Typography>
//     <TimeDescription endTime={ticketType.endTime} isUsed={ticketType.isUsed}/>
//     {description}
//   </Box>
// }
//
//
// const Demo = () => {
//   const theme = useTheme()
//   const [listCoupon, setListCoupon] = useState<Array<TicketType>>(dummyListCoupon)
//   // const [isHideBtn, setIsHideBtn] = useState<boolean>(false)
//
//   const handleClick = () => {
//
//     const newCoupon = {
//       id: (new Date()).getTime(),
//       title: 'new新規会員登録クーポン',
//       description: '新規会員限定の割引クーポンです。スキジャン会員登録後、30日間利用できます。どのサービスにもご利用頂けますが、クーポンの使用回数は1回限りです。',
//       endTime: 1668262997932,
//       discountPrice: 5000,
//       isUsed: false
//     }
//
//     setListCoupon([...listCoupon, newCoupon])
//     // setIsHideBtn(true)
//   }
//
//   const handleRemoveCoupon = (id: number) => {
//     const newListCoupon = listCoupon.filter(i => i.id !== id)
//     setListCoupon(newListCoupon)
//   }
//
//
//   return (
//     <Box p={6}>
//       <Grid
//         container
//         columns={12}
//         spacing={4}
//       >
//         <TransitionGroup component={null}>
//           {listCoupon.map(p => (
//             <Grid item xs={12} md={6} lg={4} key={p.id}>
//               <Ticket ticketType={p} handleRemove={() => handleRemoveCoupon(p.id)}/>
//             </Grid>
//           ))}
//         </TransitionGroup>
//       </Grid>
//
//       <Button
//         variant="outlined"
//         onClick={handleClick}
//         size="large"
//         css={css`
//           margin-top: ${theme.spacing(5)};
//           display: flex;
//           justify-content: center;
//           align-content: center;
//           transition: .3s ease-in-out;
//         `}
//       >
//         Add new coupon
//       </Button>
//     </Box>
//   )
// }
//
// export default Demo
