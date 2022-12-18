import { Box, Link, Typography } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import { map } from 'lodash';

const techList = [
  'html',
  'css',
  'Javascript',
  'Typescript',
  'React',
  'Redux',
  'React-Native',
  'NextJs',
];
const coworkingList = ['Github', 'Fork', 'Slack', 'Figma', 'Zeplin', 'Notion'];
const expList = [
  'YoungSan-Techno - 2011.10 ~ 2017.07',
  'M&S-Korea - 2018.04 ~ 2020.07',
  '미식의시대 - 2021.08 ~ 2022.02',
  'Gitple - 2022.02 ~',
];

const myList = [
  {
    name: 'Developement Skills',
    content: techList,
  },
  {
    name: 'Co-working tools',
    content: coworkingList,
  },
  {
    name: 'My Experience',
    content: expList,
    flex: 2,
  },
];

export default function Introduction() {
  const { WIDTH900, WIDTH401 } = useResponsive();
  return (
    <>
      <Box
        sx={{
          height: '100%',
          display: WIDTH900 ? 'block' : 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          m: 2.5,
        }}
      >
        {map(myList, (list) => {
          return (
            <Box
              key={list.name}
              sx={{
                flex: list.flex ? list.flex : 1,
                height: '100%',
                border: 15,
                borderColor: '#777',
                boxSizing: 'border-box',
                borderRadius: 5,
                p: 2,
                mr: WIDTH900 ? 0 : 2.5,
                mb: WIDTH900 ? 2.5 : 0,
              }}
            >
              <Typography
                variant="h5"
                color="#777"
                textAlign="center"
                sx={{ fontWeight: 700 }}
              >
                {list.name}
              </Typography>
              <Box sx={{ mt: 4 }}>
                {map(list.content, (list, idx) => {
                  return (
                    <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                      <Typography variant="h6" color="#777" component={'li'}>
                        {list}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}

        {/* <GithubIcon /> */}
      </Box>
      <Box sx={{ display: WIDTH900 ? 'block' : 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            flex: 1,
            height: 300,
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            m: 3,
            p: 4,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              color="#777"
              sx={{
                fontWeight: 700,
                mb: 3,
                '&:hover': {
                  color: '#fb5849',
                },
              }}
            >
              My links
            </Typography>
            <Link
              underline="none"
              href="https://www.notion.so/Daily-Work-Memo-faf3c925ebd642fcafd84b06ce1b2bb8"
            >
              <Typography
                variant="h6"
                color="#777"
                sx={{
                  '&:hover': {
                    color: '#fb5849',
                  },
                }}
              >
                Notion
              </Typography>
            </Link>
            <Link underline="none" href="https://github.com/EtErNaLiFe12">
              <Typography
                variant="h6"
                color="#777"
                sx={{
                  '&:hover': {
                    color: '#fb5849',
                  },
                }}
              >
                Github
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: 2,
            height: 300,
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            m: 3,
            p: 4,
          }}
        >
          <Box>
            <Typography variant="h4" color="#777" sx={{ fontWeight: 700 }}>
              Others
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
