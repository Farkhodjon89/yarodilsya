import Accordion from 'components/Accordion'
import { Button } from '@mui/material'
import ArrowLeftIcon from 'public/icons/ArrowLeft'
import { useRouter } from 'next/router'

const styles = {
  fontWeight: 'normal',
  fontSize: 14,
  lineHeight: '17px',
  justifyContent: 'flex-start',
  height: 45,
  ':hover': {
    color: 'secondary.main',
  },
}

const Categories = ({ category }) => {
  const router = useRouter()
  return (
    <Accordion title='Категории'>
      {category?.parent && (
        <Button
          onClick={() =>
            router.push({
              pathname: '/catalog/' + category?.parent?.node?.slug,
              query: !!router?.query?.onSale ? { onSale: true } : undefined,
            })
          }
          fullWidth
          startIcon={<ArrowLeftIcon />}
          sx={styles}
        >
          Назад к {category?.parent?.node?.name}
        </Button>
      )}
      {category?.children?.nodes.map((category) => (
        <Button
          key={category.databaseId}
          onClick={() =>
            router.push({
              pathname: '/catalog/' + category?.slug,
              query: !!router?.query?.onSale ? { onSale: true } : undefined,
            })
          }
          fullWidth
          sx={styles}
        >
          {category.name}
        </Button>
      ))}
    </Accordion>
  )
}

export default Categories
