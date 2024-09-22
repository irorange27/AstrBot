
import os
import asyncio
import sys
import warnings
import traceback
import mimetypes
from astrbot.bootstrap import AstrBotBootstrap
from util.log import LogManager

warnings.filterwarnings("ignore")
logo_tmpl = r"""
     ___           _______.___________..______      .______     ______   .___________.
    /   \         /       |           ||   _  \     |   _  \   /  __  \  |           |
   /  ^  \       |   (----`---|  |----`|  |_)  |    |  |_)  | |  |  |  | `---|  |----`
  /  /_\  \       \   \       |  |     |      /     |   _  <  |  |  |  |     |  |     
 /  _____  \  .----)   |      |  |     |  |\  \----.|  |_)  | |  `--'  |     |  |     
/__/     \__\ |_______/       |__|     | _| `._____||______/   \______/      |__|     
                                                                                    
"""
    
def main():
    global logger
    try:
        import botpy, logging
        # delete qqbotpy's logger
        for handler in logging.root.handlers[:]:
            logging.root.removeHandler(handler)
        
        logger.info(logo_tmpl)

        bootstrap = AstrBotBootstrap() 
        asyncio.run(bootstrap.run())
    except KeyboardInterrupt:
        logger.info("AstrBot 已退出。")

    except BaseException as e:
        logger.error(traceback.format_exc())

def check_env():
    if not (sys.version_info.major == 3 and sys.version_info.minor >= 9):
        logger.error("请使用 Python3.9+ 运行本项目。")
        exit()
        
    os.makedirs("data/config", exist_ok=True)
    os.makedirs("data/plugins", exist_ok=True)
    os.makedirs("data/temp", exist_ok=True)

    # workaround for issue #181
    mimetypes.add_type("text/javascript", ".js") 
    mimetypes.add_type("text/javascript", ".mjs")
    mimetypes.add_type("application/json", ".json")
    
if __name__ == "__main__":
    check_env()
    logger = LogManager.GetLogger(log_name='astrbot')
    main()
