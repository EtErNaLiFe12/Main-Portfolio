import { Box, Link, Typography } from '@mui/material';
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
  {
    companyName: 'YoungSan-Techno',
    workDate: '2011.10 ~ 2017.07',
  },
  {
    companyName: 'M&S-Korea',
    workDate: '2018.04 ~ 2020.07',
  },
  {
    companyName: '미식의시대',
    workDate: '2021.08 ~ 2022.02',
  },
  {
    companyName: 'Gitple',
    workDate: '2022.02 ~',
  },
];

export default function Introduction() {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          m: 2.5,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: '100%',
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            p: 2,
            mr: 2.5,
          }}
        >
          <Typography variant="h5" color="#777" textAlign="center" sx={{ fontWeight: 700 }}>
            Developement Skills
          </Typography>
          <Box sx={{ mt: 4 }}>
            {map(techList, (list, idx) => (
              <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                <Typography variant="h6" color="#777" component={'li'}>
                  {list}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            height: '100%',
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            p: 2,
            mr: 2.5,
          }}
        >
          <Typography variant="h5" color="#777" textAlign="center" sx={{ fontWeight: 700 }}>
            Co-working tools
          </Typography>
          <Box sx={{ mt: 4 }}>
            {map(coworkingList, (list, idx) => (
              <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                <Typography variant="h6" color="#777" component={'li'} key={idx}>
                  {list}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 2,
            height: '100%',
            border: 15,
            borderColor: '#777',
            boxSizing: 'border-box',
            borderRadius: 5,
            p: 2,
          }}
        >
          <Typography variant="h5" color="#777" textAlign="center" sx={{ fontWeight: 700 }}>
            My Experience
          </Typography>
          <Box sx={{ mt: 4 }}>
            {map(expList, (list, idx) => (
              <Box component={'ul'} key={idx} sx={{ mb: 3 }}>
                <Typography variant="h6" color="#777" component={'li'}>
                  {list.companyName} : {list.workDate}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* <GithubIcon /> */}
      </Box>
      <Box sx={{ display: 'flex' }}>
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
