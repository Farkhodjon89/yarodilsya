import Accordion from '../Accordion/Accordion'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const Categories = ({ category }) => {
  const router = useRouter()
  return (
    <Accordion title='Подгатегории' maxHeight='auto'>
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
          sx={{
            textAlign: 'start',
            justifyContent: 'start',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '22px',
            color: '#999999',
            p: 0.5,
          }}
          variant='text'
        >
          {category.name}
        </Button>
      ))}
    </Accordion>
  )
}

export default Categories
